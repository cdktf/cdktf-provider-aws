# `serviceDiscoveryPublicDnsNamespace` Submodule <a name="`serviceDiscoveryPublicDnsNamespace` Submodule" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryPublicDnsNamespace <a name="ServiceDiscoveryPublicDnsNamespace" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace aws_service_discovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryPublicDnsNamespace(Construct Scope, string Id, ServiceDiscoveryPublicDnsNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig">ServiceDiscoveryPublicDnsNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig">ServiceDiscoveryPublicDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServiceDiscoveryPublicDnsNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServiceDiscoveryPublicDnsNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServiceDiscoveryPublicDnsNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.hostedZone">HostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HostedZone`<sup>Required</sup> <a name="HostedZone" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.hostedZone"></a>

```csharp
public string HostedZone { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryPublicDnsNamespaceConfig <a name="ServiceDiscoveryPublicDnsNamespaceConfig" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryPublicDnsNamespaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#name ServiceDiscoveryPublicDnsNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#description ServiceDiscoveryPublicDnsNamespace#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#id ServiceDiscoveryPublicDnsNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags ServiceDiscoveryPublicDnsNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags_all ServiceDiscoveryPublicDnsNamespace#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#name ServiceDiscoveryPublicDnsNamespace#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#description ServiceDiscoveryPublicDnsNamespace#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#id ServiceDiscoveryPublicDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags ServiceDiscoveryPublicDnsNamespace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.serviceDiscoveryPublicDnsNamespace.ServiceDiscoveryPublicDnsNamespaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace#tags_all ServiceDiscoveryPublicDnsNamespace#tags_all}.

---



