# `directoryServiceConditionalForwarder` Submodule <a name="`directoryServiceConditionalForwarder` Submodule" id="@cdktf/provider-aws.directoryServiceConditionalForwarder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceConditionalForwarder <a name="DirectoryServiceConditionalForwarder" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder aws_directory_service_conditional_forwarder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceConditionalForwarder(Construct Scope, string Id, DirectoryServiceConditionalForwarderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig">DirectoryServiceConditionalForwarderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig">DirectoryServiceConditionalForwarderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceConditionalForwarder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceConditionalForwarder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceConditionalForwarder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIpsInput">DnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainNameInput">RemoteDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainName">RemoteDomainName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `DnsIpsInput`<sup>Optional</sup> <a name="DnsIpsInput" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIpsInput"></a>

```csharp
public string[] DnsIpsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RemoteDomainNameInput`<sup>Optional</sup> <a name="RemoteDomainNameInput" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainNameInput"></a>

```csharp
public string RemoteDomainNameInput { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RemoteDomainName`<sup>Required</sup> <a name="RemoteDomainName" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainName"></a>

```csharp
public string RemoteDomainName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceConditionalForwarderConfig <a name="DirectoryServiceConditionalForwarderConfig" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceConditionalForwarderConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DirectoryId,
    string[] DnsIps,
    string RemoteDomainName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#directory_id DirectoryServiceConditionalForwarder#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#dns_ips DirectoryServiceConditionalForwarder#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.remoteDomainName">RemoteDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#id DirectoryServiceConditionalForwarder#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#directory_id DirectoryServiceConditionalForwarder#directory_id}.

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#dns_ips DirectoryServiceConditionalForwarder#dns_ips}.

---

##### `RemoteDomainName`<sup>Required</sup> <a name="RemoteDomainName" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.remoteDomainName"></a>

```csharp
public string RemoteDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#id DirectoryServiceConditionalForwarder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



