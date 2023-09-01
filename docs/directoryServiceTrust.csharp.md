# `aws_directory_service_trust`

Refer to the Terraform Registory for docs: [`aws_directory_service_trust`](https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust).

# `directoryServiceTrust` Submodule <a name="`directoryServiceTrust` Submodule" id="@cdktf/provider-aws.directoryServiceTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceTrust <a name="DirectoryServiceTrust" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust aws_directory_service_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceTrust(Construct Scope, string Id, DirectoryServiceTrustConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig">DirectoryServiceTrustConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig">DirectoryServiceTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs">ResetConditionalForwarderIpAddrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder">ResetDeleteAssociatedConditionalForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth">ResetSelectiveAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType">ResetTrustType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetConditionalForwarderIpAddrs` <a name="ResetConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetConditionalForwarderIpAddrs"></a>

```csharp
private void ResetConditionalForwarderIpAddrs()
```

##### `ResetDeleteAssociatedConditionalForwarder` <a name="ResetDeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetDeleteAssociatedConditionalForwarder"></a>

```csharp
private void ResetDeleteAssociatedConditionalForwarder()
```

##### `ResetSelectiveAuth` <a name="ResetSelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetSelectiveAuth"></a>

```csharp
private void ResetSelectiveAuth()
```

##### `ResetTrustType` <a name="ResetTrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.resetTrustType"></a>

```csharp
private void ResetTrustType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceTrust.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceTrust.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceTrust.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime">CreatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime">LastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime">StateLastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState">TrustState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason">TrustStateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput">ConditionalForwarderIpAddrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput">DeleteAssociatedConditionalForwarderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput">RemoteDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput">SelectiveAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput">TrustDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput">TrustPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput">TrustTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs">ConditionalForwarderIpAddrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder">DeleteAssociatedConditionalForwarder</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName">RemoteDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth">SelectiveAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection">TrustDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword">TrustPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType">TrustType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedDateTime`<sup>Required</sup> <a name="CreatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.createdDateTime"></a>

```csharp
public string CreatedDateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedDateTime`<sup>Required</sup> <a name="LastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.lastUpdatedDateTime"></a>

```csharp
public string LastUpdatedDateTime { get; }
```

- *Type:* string

---

##### `StateLastUpdatedDateTime`<sup>Required</sup> <a name="StateLastUpdatedDateTime" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.stateLastUpdatedDateTime"></a>

```csharp
public string StateLastUpdatedDateTime { get; }
```

- *Type:* string

---

##### `TrustState`<sup>Required</sup> <a name="TrustState" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustState"></a>

```csharp
public string TrustState { get; }
```

- *Type:* string

---

##### `TrustStateReason`<sup>Required</sup> <a name="TrustStateReason" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustStateReason"></a>

```csharp
public string TrustStateReason { get; }
```

- *Type:* string

---

##### `ConditionalForwarderIpAddrsInput`<sup>Optional</sup> <a name="ConditionalForwarderIpAddrsInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrsInput"></a>

```csharp
public string[] ConditionalForwarderIpAddrsInput { get; }
```

- *Type:* string[]

---

##### `DeleteAssociatedConditionalForwarderInput`<sup>Optional</sup> <a name="DeleteAssociatedConditionalForwarderInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarderInput"></a>

```csharp
public object DeleteAssociatedConditionalForwarderInput { get; }
```

- *Type:* object

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `RemoteDomainNameInput`<sup>Optional</sup> <a name="RemoteDomainNameInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainNameInput"></a>

```csharp
public string RemoteDomainNameInput { get; }
```

- *Type:* string

---

##### `SelectiveAuthInput`<sup>Optional</sup> <a name="SelectiveAuthInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuthInput"></a>

```csharp
public string SelectiveAuthInput { get; }
```

- *Type:* string

---

##### `TrustDirectionInput`<sup>Optional</sup> <a name="TrustDirectionInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirectionInput"></a>

```csharp
public string TrustDirectionInput { get; }
```

- *Type:* string

---

##### `TrustPasswordInput`<sup>Optional</sup> <a name="TrustPasswordInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPasswordInput"></a>

```csharp
public string TrustPasswordInput { get; }
```

- *Type:* string

---

##### `TrustTypeInput`<sup>Optional</sup> <a name="TrustTypeInput" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustTypeInput"></a>

```csharp
public string TrustTypeInput { get; }
```

- *Type:* string

---

##### `ConditionalForwarderIpAddrs`<sup>Required</sup> <a name="ConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.conditionalForwarderIpAddrs"></a>

```csharp
public string[] ConditionalForwarderIpAddrs { get; }
```

- *Type:* string[]

---

##### `DeleteAssociatedConditionalForwarder`<sup>Required</sup> <a name="DeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.deleteAssociatedConditionalForwarder"></a>

```csharp
public object DeleteAssociatedConditionalForwarder { get; }
```

- *Type:* object

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `RemoteDomainName`<sup>Required</sup> <a name="RemoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.remoteDomainName"></a>

```csharp
public string RemoteDomainName { get; }
```

- *Type:* string

---

##### `SelectiveAuth`<sup>Required</sup> <a name="SelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.selectiveAuth"></a>

```csharp
public string SelectiveAuth { get; }
```

- *Type:* string

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustDirection"></a>

```csharp
public string TrustDirection { get; }
```

- *Type:* string

---

##### `TrustPassword`<sup>Required</sup> <a name="TrustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustPassword"></a>

```csharp
public string TrustPassword { get; }
```

- *Type:* string

---

##### `TrustType`<sup>Required</sup> <a name="TrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.trustType"></a>

```csharp
public string TrustType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrust.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceTrustConfig <a name="DirectoryServiceTrustConfig" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceTrustConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DirectoryId,
    string RemoteDomainName,
    string TrustDirection,
    string TrustPassword,
    string[] ConditionalForwarderIpAddrs = null,
    object DeleteAssociatedConditionalForwarder = null,
    string SelectiveAuth = null,
    string TrustType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName">RemoteDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection">TrustDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword">TrustPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs">ConditionalForwarderIpAddrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder">DeleteAssociatedConditionalForwarder</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth">SelectiveAuth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType">TrustType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}.

---

##### `RemoteDomainName`<sup>Required</sup> <a name="RemoteDomainName" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.remoteDomainName"></a>

```csharp
public string RemoteDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}.

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustDirection"></a>

```csharp
public string TrustDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}.

---

##### `TrustPassword`<sup>Required</sup> <a name="TrustPassword" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustPassword"></a>

```csharp
public string TrustPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}.

---

##### `ConditionalForwarderIpAddrs`<sup>Optional</sup> <a name="ConditionalForwarderIpAddrs" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.conditionalForwarderIpAddrs"></a>

```csharp
public string[] ConditionalForwarderIpAddrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}.

---

##### `DeleteAssociatedConditionalForwarder`<sup>Optional</sup> <a name="DeleteAssociatedConditionalForwarder" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.deleteAssociatedConditionalForwarder"></a>

```csharp
public object DeleteAssociatedConditionalForwarder { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}.

---

##### `SelectiveAuth`<sup>Optional</sup> <a name="SelectiveAuth" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.selectiveAuth"></a>

```csharp
public string SelectiveAuth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}.

---

##### `TrustType`<sup>Optional</sup> <a name="TrustType" id="@cdktf/provider-aws.directoryServiceTrust.DirectoryServiceTrustConfig.property.trustType"></a>

```csharp
public string TrustType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.15.0/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}.

---



