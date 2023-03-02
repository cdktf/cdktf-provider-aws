# `s3AccountPublicAccessBlock` Submodule <a name="`s3AccountPublicAccessBlock` Submodule" id="@cdktf/provider-aws.s3AccountPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccountPublicAccessBlock <a name="S3AccountPublicAccessBlock" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block aws_s3_account_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccountPublicAccessBlock(Construct Scope, string Id, S3AccountPublicAccessBlockConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig">S3AccountPublicAccessBlockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig">S3AccountPublicAccessBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicAcls"></a>

```csharp
private void ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicPolicy"></a>

```csharp
private void ResetBlockPublicPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetIgnorePublicAcls"></a>

```csharp
private void ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetRestrictPublicBuckets"></a>

```csharp
private void ResetRestrictPublicBuckets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3AccountPublicAccessBlock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3AccountPublicAccessBlock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3AccountPublicAccessBlock.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAclsInput"></a>

```csharp
public object BlockPublicAclsInput { get; }
```

- *Type:* object

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicyInput"></a>

```csharp
public object BlockPublicPolicyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAclsInput"></a>

```csharp
public object IgnorePublicAclsInput { get; }
```

- *Type:* object

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```csharp
public object RestrictPublicBucketsInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; }
```

- *Type:* object

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; }
```

- *Type:* object

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccountPublicAccessBlockConfig <a name="S3AccountPublicAccessBlockConfig" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccountPublicAccessBlockConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    object BlockPublicAcls = null,
    object BlockPublicPolicy = null,
    string Id = null,
    object IgnorePublicAcls = null,
    object RestrictPublicBuckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#account_id S3AccountPublicAccessBlock#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_acls S3AccountPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_policy S3AccountPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#id S3AccountPublicAccessBlock#id}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#account_id S3AccountPublicAccessBlock#account_id}.

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_acls S3AccountPublicAccessBlock#block_public_acls}.

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_policy S3AccountPublicAccessBlock#block_public_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#id S3AccountPublicAccessBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}.

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}.

---



