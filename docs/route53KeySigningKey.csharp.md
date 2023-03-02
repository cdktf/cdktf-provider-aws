# `route53KeySigningKey` Submodule <a name="`route53KeySigningKey` Submodule" id="@cdktf/provider-aws.route53KeySigningKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53KeySigningKey <a name="Route53KeySigningKey" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key aws_route53_key_signing_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53KeySigningKey(Construct Scope, string Id, Route53KeySigningKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig">Route53KeySigningKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig">Route53KeySigningKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53KeySigningKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53KeySigningKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53KeySigningKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic">DigestAlgorithmMnemonic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType">DigestAlgorithmType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestValue">DigestValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord">DnskeyRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dsRecord">DsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.flag">Flag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyTag">KeyTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic">SigningAlgorithmMnemonic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType">SigningAlgorithmType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput">KeyManagementServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn">KeyManagementServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DigestAlgorithmMnemonic`<sup>Required</sup> <a name="DigestAlgorithmMnemonic" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic"></a>

```csharp
public string DigestAlgorithmMnemonic { get; }
```

- *Type:* string

---

##### `DigestAlgorithmType`<sup>Required</sup> <a name="DigestAlgorithmType" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType"></a>

```csharp
public double DigestAlgorithmType { get; }
```

- *Type:* double

---

##### `DigestValue`<sup>Required</sup> <a name="DigestValue" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestValue"></a>

```csharp
public string DigestValue { get; }
```

- *Type:* string

---

##### `DnskeyRecord`<sup>Required</sup> <a name="DnskeyRecord" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord"></a>

```csharp
public string DnskeyRecord { get; }
```

- *Type:* string

---

##### `DsRecord`<sup>Required</sup> <a name="DsRecord" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dsRecord"></a>

```csharp
public string DsRecord { get; }
```

- *Type:* string

---

##### `Flag`<sup>Required</sup> <a name="Flag" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.flag"></a>

```csharp
public double Flag { get; }
```

- *Type:* double

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyTag"></a>

```csharp
public double KeyTag { get; }
```

- *Type:* double

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `SigningAlgorithmMnemonic`<sup>Required</sup> <a name="SigningAlgorithmMnemonic" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic"></a>

```csharp
public string SigningAlgorithmMnemonic { get; }
```

- *Type:* string

---

##### `SigningAlgorithmType`<sup>Required</sup> <a name="SigningAlgorithmType" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType"></a>

```csharp
public double SigningAlgorithmType { get; }
```

- *Type:* double

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput"></a>

```csharp
public string HostedZoneIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyManagementServiceArnInput`<sup>Optional</sup> <a name="KeyManagementServiceArnInput" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput"></a>

```csharp
public string KeyManagementServiceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyManagementServiceArn`<sup>Required</sup> <a name="KeyManagementServiceArn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn"></a>

```csharp
public string KeyManagementServiceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53KeySigningKeyConfig <a name="Route53KeySigningKeyConfig" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53KeySigningKeyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HostedZoneId,
    string KeyManagementServiceArn,
    string Name,
    string Id = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn">KeyManagementServiceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#name Route53KeySigningKey#name}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#id Route53KeySigningKey#id}. |
| <code><a href="#@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#status Route53KeySigningKey#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}.

---

##### `KeyManagementServiceArn`<sup>Required</sup> <a name="KeyManagementServiceArn" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn"></a>

```csharp
public string KeyManagementServiceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#name Route53KeySigningKey#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#id Route53KeySigningKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#status Route53KeySigningKey#status}.

---



