# `apprunnerCustomDomainAssociation` Submodule <a name="`apprunnerCustomDomainAssociation` Submodule" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerCustomDomainAssociation <a name="ApprunnerCustomDomainAssociation" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association aws_apprunner_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApprunnerCustomDomainAssociation(Construct Scope, string Id, ApprunnerCustomDomainAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig">ApprunnerCustomDomainAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig">ApprunnerCustomDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain">ResetEnableWwwSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnableWwwSubdomain` <a name="ResetEnableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain"></a>

```csharp
private void ResetEnableWwwSubdomain()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApprunnerCustomDomainAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApprunnerCustomDomainAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApprunnerCustomDomainAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords">CertificateValidationRecords</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget">DnsTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput">EnableWwwSubdomainInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput">ServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain">EnableWwwSubdomain</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn">ServiceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateValidationRecords`<sup>Required</sup> <a name="CertificateValidationRecords" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords"></a>

```csharp
public ApprunnerCustomDomainAssociationCertificateValidationRecordsList CertificateValidationRecords { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a>

---

##### `DnsTarget`<sup>Required</sup> <a name="DnsTarget" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget"></a>

```csharp
public string DnsTarget { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EnableWwwSubdomainInput`<sup>Optional</sup> <a name="EnableWwwSubdomainInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput"></a>

```csharp
public object EnableWwwSubdomainInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceArnInput`<sup>Optional</sup> <a name="ServiceArnInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput"></a>

```csharp
public string ServiceArnInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EnableWwwSubdomain`<sup>Required</sup> <a name="EnableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain"></a>

```csharp
public object EnableWwwSubdomain { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn"></a>

```csharp
public string ServiceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecords <a name="ApprunnerCustomDomainAssociationCertificateValidationRecords" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApprunnerCustomDomainAssociationCertificateValidationRecords {

};
```


### ApprunnerCustomDomainAssociationConfig <a name="ApprunnerCustomDomainAssociationConfig" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApprunnerCustomDomainAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    string ServiceArn,
    object EnableWwwSubdomain = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn">ServiceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain">EnableWwwSubdomain</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}.

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn"></a>

```csharp
public string ServiceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}.

---

##### `EnableWwwSubdomain`<sup>Optional</sup> <a name="EnableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain"></a>

```csharp
public object EnableWwwSubdomain { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecordsList <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsList" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApprunnerCustomDomainAssociationCertificateValidationRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get"></a>

```csharp
private ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue"></a>

```csharp
public ApprunnerCustomDomainAssociationCertificateValidationRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a>

---



