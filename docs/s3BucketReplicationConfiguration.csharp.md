# `s3BucketReplicationConfiguration` Submodule <a name="`s3BucketReplicationConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketReplicationConfigurationA <a name="S3BucketReplicationConfigurationA" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationA(Construct Scope, string Id, S3BucketReplicationConfigurationAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig">S3BucketReplicationConfigurationAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig">S3BucketReplicationConfigurationAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketReplicationConfigurationA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketReplicationConfigurationA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketReplicationConfigurationA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList">S3BucketReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.rule"></a>

```csharp
public S3BucketReplicationConfigurationRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList">S3BucketReplicationConfigurationRuleList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketReplicationConfigurationAConfig <a name="S3BucketReplicationConfigurationAConfig" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationAConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Role,
    object Rule,
    string Id = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#rule S3BucketReplicationConfigurationA#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationAConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}.

---

### S3BucketReplicationConfigurationRule <a name="S3BucketReplicationConfigurationRule" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRule {
    S3BucketReplicationConfigurationRuleDestination Destination,
    string Status,
    S3BucketReplicationConfigurationRuleDeleteMarkerReplication DeleteMarkerReplication = null,
    S3BucketReplicationConfigurationRuleExistingObjectReplication ExistingObjectReplication = null,
    S3BucketReplicationConfigurationRuleFilter Filter = null,
    string Id = null,
    string Prefix = null,
    double Priority = null,
    S3BucketReplicationConfigurationRuleSourceSelectionCriteria SourceSelectionCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.deleteMarkerReplication">DeleteMarkerReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | delete_marker_replication block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.existingObjectReplication">ExistingObjectReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | existing_object_replication block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#priority S3BucketReplicationConfigurationA#priority}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.sourceSelectionCriteria">SourceSelectionCriteria</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | source_selection_criteria block. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.destination"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#destination S3BucketReplicationConfigurationA#destination}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `DeleteMarkerReplication`<sup>Optional</sup> <a name="DeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.deleteMarkerReplication"></a>

```csharp
public S3BucketReplicationConfigurationRuleDeleteMarkerReplication DeleteMarkerReplication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

delete_marker_replication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#delete_marker_replication S3BucketReplicationConfigurationA#delete_marker_replication}

---

##### `ExistingObjectReplication`<sup>Optional</sup> <a name="ExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.existingObjectReplication"></a>

```csharp
public S3BucketReplicationConfigurationRuleExistingObjectReplication ExistingObjectReplication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

existing_object_replication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#existing_object_replication S3BucketReplicationConfigurationA#existing_object_replication}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.filter"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#filter S3BucketReplicationConfigurationA#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#priority S3BucketReplicationConfigurationA#priority}.

---

##### `SourceSelectionCriteria`<sup>Optional</sup> <a name="SourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRule.property.sourceSelectionCriteria"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteria SourceSelectionCriteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

source_selection_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#source_selection_criteria S3BucketReplicationConfigurationA#source_selection_criteria}

---

### S3BucketReplicationConfigurationRuleDeleteMarkerReplication <a name="S3BucketReplicationConfigurationRuleDeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDeleteMarkerReplication {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleDestination <a name="S3BucketReplicationConfigurationRuleDestination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestination {
    string Bucket,
    S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation AccessControlTranslation = null,
    string Account = null,
    S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration EncryptionConfiguration = null,
    S3BucketReplicationConfigurationRuleDestinationMetrics Metrics = null,
    S3BucketReplicationConfigurationRuleDestinationReplicationTime ReplicationTime = null,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.accessControlTranslation">AccessControlTranslation</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | access_control_translation block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.account">Account</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.metrics">Metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | metrics block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.replicationTime">ReplicationTime</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | replication_time block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}.

---

##### `AccessControlTranslation`<sup>Optional</sup> <a name="AccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.accessControlTranslation"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation AccessControlTranslation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

access_control_translation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#access_control_translation S3BucketReplicationConfigurationA#access_control_translation}

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.encryptionConfiguration"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#encryption_configuration S3BucketReplicationConfigurationA#encryption_configuration}

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.metrics"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetrics Metrics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#metrics S3BucketReplicationConfigurationA#metrics}

---

##### `ReplicationTime`<sup>Optional</sup> <a name="ReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.replicationTime"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTime ReplicationTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

replication_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replication_time S3BucketReplicationConfigurationA#replication_time}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}.

---

### S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation <a name="S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation {
    string Owner
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}. |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}.

---

### S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration <a name="S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration {
    string ReplicaKmsKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.property.replicaKmsKeyId">ReplicaKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}. |

---

##### `ReplicaKmsKeyId`<sup>Required</sup> <a name="ReplicaKmsKeyId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.property.replicaKmsKeyId"></a>

```csharp
public string ReplicaKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}.

---

### S3BucketReplicationConfigurationRuleDestinationMetrics <a name="S3BucketReplicationConfigurationRuleDestinationMetrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationMetrics {
    string Status,
    S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold EventThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.eventThreshold">EventThreshold</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | event_threshold block. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `EventThreshold`<sup>Optional</sup> <a name="EventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics.property.eventThreshold"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold EventThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

event_threshold block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#event_threshold S3BucketReplicationConfigurationA#event_threshold}

---

### S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold <a name="S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold {
    double Minutes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}. |

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---

### S3BucketReplicationConfigurationRuleDestinationReplicationTime <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationReplicationTime {
    string Status,
    S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.time">Time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | time block. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime.property.time"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime Time { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#time S3BucketReplicationConfigurationA#time}

---

### S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime {
    double Minutes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}. |

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}.

---

### S3BucketReplicationConfigurationRuleExistingObjectReplication <a name="S3BucketReplicationConfigurationRuleExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleExistingObjectReplication {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleFilter <a name="S3BucketReplicationConfigurationRuleFilter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleFilter {
    S3BucketReplicationConfigurationRuleFilterAnd And = null,
    string Prefix = null,
    S3BucketReplicationConfigurationRuleFilterTag Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | and block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | tag block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.and"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterAnd And { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#and S3BucketReplicationConfigurationA#and}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter.property.tag"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterTag Tag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tag S3BucketReplicationConfigurationA#tag}

---

### S3BucketReplicationConfigurationRuleFilterAnd <a name="S3BucketReplicationConfigurationRuleFilterAnd" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleFilterAnd {
    string Prefix = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}.

---

### S3BucketReplicationConfigurationRuleFilterTag <a name="S3BucketReplicationConfigurationRuleFilterTag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleFilterTag {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}.

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteria <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteria {
    S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications ReplicaModifications = null,
    S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects SseKmsEncryptedObjects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.replicaModifications">ReplicaModifications</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | replica_modifications block. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.sseKmsEncryptedObjects">SseKmsEncryptedObjects</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | sse_kms_encrypted_objects block. |

---

##### `ReplicaModifications`<sup>Optional</sup> <a name="ReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.replicaModifications"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications ReplicaModifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

replica_modifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#replica_modifications S3BucketReplicationConfigurationA#replica_modifications}

---

##### `SseKmsEncryptedObjects`<sup>Optional</sup> <a name="SseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria.property.sseKmsEncryptedObjects"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects SseKmsEncryptedObjects { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

sse_kms_encrypted_objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#sse_kms_encrypted_objects S3BucketReplicationConfigurationA#sse_kms_encrypted_objects}

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference <a name="S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDeleteMarkerReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---


### S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---


### S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyIdInput">ReplicaKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId">ReplicaKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicaKmsKeyIdInput`<sup>Optional</sup> <a name="ReplicaKmsKeyIdInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyIdInput"></a>

```csharp
public string ReplicaKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ReplicaKmsKeyId`<sup>Required</sup> <a name="ReplicaKmsKeyId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId"></a>

```csharp
public string ReplicaKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---


### S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---


### S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold">PutEventThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resetEventThreshold">ResetEventThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventThreshold` <a name="PutEventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold"></a>

```csharp
private void PutEventThreshold(S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.putEventThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---

##### `ResetEventThreshold` <a name="ResetEventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resetEventThreshold"></a>

```csharp
private void ResetEventThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold">EventThreshold</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThresholdInput">EventThresholdInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventThreshold`<sup>Required</sup> <a name="EventThreshold" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference EventThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference</a>

---

##### `EventThresholdInput`<sup>Optional</sup> <a name="EventThresholdInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThresholdInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold EventThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---


### S3BucketReplicationConfigurationRuleDestinationOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation">PutAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime">PutReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccessControlTranslation">ResetAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetReplicationTime">ResetReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessControlTranslation` <a name="PutAccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation"></a>

```csharp
private void PutAccessControlTranslation(S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putAccessControlTranslation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics"></a>

```csharp
private void PutMetrics(S3BucketReplicationConfigurationRuleDestinationMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---

##### `PutReplicationTime` <a name="PutReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime"></a>

```csharp
private void PutReplicationTime(S3BucketReplicationConfigurationRuleDestinationReplicationTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.putReplicationTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---

##### `ResetAccessControlTranslation` <a name="ResetAccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccessControlTranslation"></a>

```csharp
private void ResetAccessControlTranslation()
```

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetMetrics"></a>

```csharp
private void ResetMetrics()
```

##### `ResetReplicationTime` <a name="ResetReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetReplicationTime"></a>

```csharp
private void ResetReplicationTime()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation">AccessControlTranslation</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference">S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics">Metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime">ReplicationTime</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslationInput">AccessControlTranslationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metricsInput">MetricsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTimeInput">ReplicationTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessControlTranslation`<sup>Required</sup> <a name="AccessControlTranslation" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference AccessControlTranslation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference">S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference</a>

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference Metrics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference">S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference</a>

---

##### `ReplicationTime`<sup>Required</sup> <a name="ReplicationTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference ReplicationTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference</a>

---

##### `AccessControlTranslationInput`<sup>Optional</sup> <a name="AccessControlTranslationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslationInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation AccessControlTranslationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfigurationInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.metricsInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationMetrics MetricsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetrics">S3BucketReplicationConfigurationRuleDestinationMetrics</a>

---

##### `ReplicationTimeInput`<sup>Optional</sup> <a name="ReplicationTimeInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTimeInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTime ReplicationTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---


### S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime">PutTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTime` <a name="PutTime" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime"></a>

```csharp
private void PutTime(S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time">Time</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.timeInput">TimeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference Time { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.timeInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime TimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTime">S3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---


### S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference <a name="S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---


### S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference <a name="S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleExistingObjectReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---


### S3BucketReplicationConfigurationRuleFilterAndOutputReference <a name="S3BucketReplicationConfigurationRuleFilterAndOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleFilterAndOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterAnd InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---


### S3BucketReplicationConfigurationRuleFilterOutputReference <a name="S3BucketReplicationConfigurationRuleFilterOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd"></a>

```csharp
private void PutAnd(S3BucketReplicationConfigurationRuleFilterAnd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag"></a>

```csharp
private void PutTag(S3BucketReplicationConfigurationRuleFilterTag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetAnd"></a>

```csharp
private void ResetAnd()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference">S3BucketReplicationConfigurationRuleFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference">S3BucketReplicationConfigurationRuleFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.andInput">AndInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tagInput">TagInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.and"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterAndOutputReference And { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference">S3BucketReplicationConfigurationRuleFilterAndOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tag"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterTagOutputReference Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference">S3BucketReplicationConfigurationRuleFilterTagOutputReference</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.andInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterAnd AndInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAnd">S3BucketReplicationConfigurationRuleFilterAnd</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.tagInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterTag TagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---


### S3BucketReplicationConfigurationRuleFilterTagOutputReference <a name="S3BucketReplicationConfigurationRuleFilterTagOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleFilterTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTag">S3BucketReplicationConfigurationRuleFilterTag</a>

---


### S3BucketReplicationConfigurationRuleList <a name="S3BucketReplicationConfigurationRuleList" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get"></a>

```csharp
private S3BucketReplicationConfigurationRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketReplicationConfigurationRuleOutputReference <a name="S3BucketReplicationConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication">PutDeleteMarkerReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication">PutExistingObjectReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria">PutSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetDeleteMarkerReplication">ResetDeleteMarkerReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetExistingObjectReplication">ResetExistingObjectReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetSourceSelectionCriteria">ResetSourceSelectionCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeleteMarkerReplication` <a name="PutDeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication"></a>

```csharp
private void PutDeleteMarkerReplication(S3BucketReplicationConfigurationRuleDeleteMarkerReplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDeleteMarkerReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination"></a>

```csharp
private void PutDestination(S3BucketReplicationConfigurationRuleDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---

##### `PutExistingObjectReplication` <a name="PutExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication"></a>

```csharp
private void PutExistingObjectReplication(S3BucketReplicationConfigurationRuleExistingObjectReplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putExistingObjectReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter"></a>

```csharp
private void PutFilter(S3BucketReplicationConfigurationRuleFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---

##### `PutSourceSelectionCriteria` <a name="PutSourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria"></a>

```csharp
private void PutSourceSelectionCriteria(S3BucketReplicationConfigurationRuleSourceSelectionCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.putSourceSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---

##### `ResetDeleteMarkerReplication` <a name="ResetDeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetDeleteMarkerReplication"></a>

```csharp
private void ResetDeleteMarkerReplication()
```

##### `ResetExistingObjectReplication` <a name="ResetExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetExistingObjectReplication"></a>

```csharp
private void ResetExistingObjectReplication()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetSourceSelectionCriteria` <a name="ResetSourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.resetSourceSelectionCriteria"></a>

```csharp
private void ResetSourceSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication">DeleteMarkerReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference">S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference">S3BucketReplicationConfigurationRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication">ExistingObjectReplication</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference">S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference">S3BucketReplicationConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria">SourceSelectionCriteria</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplicationInput">DeleteMarkerReplicationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplicationInput">ExistingObjectReplicationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteriaInput">SourceSelectionCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteMarkerReplication`<sup>Required</sup> <a name="DeleteMarkerReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication"></a>

```csharp
public S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference DeleteMarkerReplication { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference">S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference</a>

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destination"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference">S3BucketReplicationConfigurationRuleDestinationOutputReference</a>

---

##### `ExistingObjectReplication`<sup>Required</sup> <a name="ExistingObjectReplication" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication"></a>

```csharp
public S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference ExistingObjectReplication { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference">S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filter"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference">S3BucketReplicationConfigurationRuleFilterOutputReference</a>

---

##### `SourceSelectionCriteria`<sup>Required</sup> <a name="SourceSelectionCriteria" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference SourceSelectionCriteria { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference</a>

---

##### `DeleteMarkerReplicationInput`<sup>Optional</sup> <a name="DeleteMarkerReplicationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplicationInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDeleteMarkerReplication DeleteMarkerReplicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplication">S3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.destinationInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestination">S3BucketReplicationConfigurationRuleDestination</a>

---

##### `ExistingObjectReplicationInput`<sup>Optional</sup> <a name="ExistingObjectReplicationInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplicationInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleExistingObjectReplication ExistingObjectReplicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplication">S3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.filterInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilter">S3BucketReplicationConfigurationRuleFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SourceSelectionCriteriaInput`<sup>Optional</sup> <a name="SourceSelectionCriteriaInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteriaInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteria SourceSelectionCriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications">PutReplicaModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects">PutSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetReplicaModifications">ResetReplicaModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects">ResetSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReplicaModifications` <a name="PutReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications"></a>

```csharp
private void PutReplicaModifications(S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putReplicaModifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---

##### `PutSseKmsEncryptedObjects` <a name="PutSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects"></a>

```csharp
private void PutSseKmsEncryptedObjects(S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `ResetReplicaModifications` <a name="ResetReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetReplicaModifications"></a>

```csharp
private void ResetReplicaModifications()
```

##### `ResetSseKmsEncryptedObjects` <a name="ResetSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects"></a>

```csharp
private void ResetSseKmsEncryptedObjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications">ReplicaModifications</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects">SseKmsEncryptedObjects</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModificationsInput">ReplicaModificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput">SseKmsEncryptedObjectsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicaModifications`<sup>Required</sup> <a name="ReplicaModifications" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference ReplicaModifications { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference</a>

---

##### `SseKmsEncryptedObjects`<sup>Required</sup> <a name="SseKmsEncryptedObjects" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference SseKmsEncryptedObjects { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a>

---

##### `ReplicaModificationsInput`<sup>Optional</sup> <a name="ReplicaModificationsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModificationsInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications ReplicaModificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---

##### `SseKmsEncryptedObjectsInput`<sup>Optional</sup> <a name="SseKmsEncryptedObjectsInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects SseKmsEncryptedObjectsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteria">S3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---


### S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference <a name="S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue"></a>

```csharp
public S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---



