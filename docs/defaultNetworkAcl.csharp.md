# `defaultNetworkAcl` Submodule <a name="`defaultNetworkAcl` Submodule" id="@cdktf/provider-aws.defaultNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNetworkAcl <a name="DefaultNetworkAcl" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl aws_default_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAcl(Construct Scope, string Id, DefaultNetworkAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig">DefaultNetworkAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig">DefaultNetworkAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress"></a>

```csharp
private void PutEgress(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress.parameter.value"></a>

- *Type:* object

---

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress"></a>

```csharp
private void PutIngress(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress.parameter.value"></a>

- *Type:* object

---

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress"></a>

```csharp
private void ResetIngress()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultNetworkAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultNetworkAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultNetworkAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput">DefaultNetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput">EgressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput">IngressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId">DefaultNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress"></a>

```csharp
public DefaultNetworkAclEgressList Egress { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress"></a>

```csharp
public DefaultNetworkAclIngressList Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `DefaultNetworkAclIdInput`<sup>Optional</sup> <a name="DefaultNetworkAclIdInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput"></a>

```csharp
public string DefaultNetworkAclIdInput { get; }
```

- *Type:* string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput"></a>

```csharp
public object EgressInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput"></a>

```csharp
public object IngressInput { get; }
```

- *Type:* object

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultNetworkAclId`<sup>Required</sup> <a name="DefaultNetworkAclId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId"></a>

```csharp
public string DefaultNetworkAclId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNetworkAclConfig <a name="DefaultNetworkAclConfig" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAclConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultNetworkAclId,
    object Egress = null,
    string Id = null,
    object Ingress = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId">DefaultNetworkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress">Egress</a></code> | <code>object</code> | egress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress">Ingress</a></code> | <code>object</code> | ingress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultNetworkAclId`<sup>Required</sup> <a name="DefaultNetworkAclId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId"></a>

```csharp
public string DefaultNetworkAclId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress"></a>

```csharp
public object Egress { get; set; }
```

- *Type:* object

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#egress DefaultNetworkAcl#egress}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress"></a>

```csharp
public object Ingress { get; set; }
```

- *Type:* object

ingress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ingress DefaultNetworkAcl#ingress}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}.

---

### DefaultNetworkAclEgress <a name="DefaultNetworkAclEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAclEgress {
    string Action,
    double FromPort,
    string Protocol,
    double RuleNo,
    double ToPort,
    string CidrBlock = null,
    double IcmpCode = null,
    double IcmpType = null,
    string Ipv6CidrBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo">RuleNo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo"></a>

```csharp
public double RuleNo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

### DefaultNetworkAclIngress <a name="DefaultNetworkAclIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAclIngress {
    string Action,
    double FromPort,
    string Protocol,
    double RuleNo,
    double ToPort,
    string CidrBlock = null,
    double IcmpCode = null,
    double IcmpType = null,
    string Ipv6CidrBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo">RuleNo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo"></a>

```csharp
public double RuleNo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNetworkAclEgressList <a name="DefaultNetworkAclEgressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAclEgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get"></a>

```csharp
private DefaultNetworkAclEgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultNetworkAclEgressOutputReference <a name="DefaultNetworkAclEgressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAclEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput">RuleNoInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo">RuleNo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleNoInput`<sup>Optional</sup> <a name="RuleNoInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput"></a>

```csharp
public double RuleNoInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo"></a>

```csharp
public double RuleNo { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultNetworkAclIngressList <a name="DefaultNetworkAclIngressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAclIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get"></a>

```csharp
private DefaultNetworkAclIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultNetworkAclIngressOutputReference <a name="DefaultNetworkAclIngressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultNetworkAclIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput">RuleNoInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo">RuleNo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleNoInput`<sup>Optional</sup> <a name="RuleNoInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput"></a>

```csharp
public double RuleNoInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleNo`<sup>Required</sup> <a name="RuleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo"></a>

```csharp
public double RuleNo { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



