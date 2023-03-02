# `s3BucketAcl` Submodule <a name="`s3BucketAcl` Submodule" id="@cdktf/provider-aws.s3BucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketAcl <a name="S3BucketAcl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl aws_s3_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAcl(Construct Scope, string Id, S3BucketAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig">S3BucketAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig">S3BucketAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy">PutAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy">ResetAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccessControlPolicy` <a name="PutAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy"></a>

```csharp
private void PutAccessControlPolicy(S3BucketAclAccessControlPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---

##### `ResetAccessControlPolicy` <a name="ResetAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy"></a>

```csharp
private void ResetAccessControlPolicy()
```

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy">AccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput">AccessControlPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessControlPolicy`<sup>Required</sup> <a name="AccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy"></a>

```csharp
public S3BucketAclAccessControlPolicyOutputReference AccessControlPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a>

---

##### `AccessControlPolicyInput`<sup>Optional</sup> <a name="AccessControlPolicyInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput"></a>

```csharp
public S3BucketAclAccessControlPolicy AccessControlPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketAclAccessControlPolicy <a name="S3BucketAclAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicy {
    S3BucketAclAccessControlPolicyOwner Owner,
    object Grant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner">Owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | owner block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant">Grant</a></code> | <code>object</code> | grant block. |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner"></a>

```csharp
public S3BucketAclAccessControlPolicyOwner Owner { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

owner block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#owner S3BucketAcl#owner}

---

##### `Grant`<sup>Optional</sup> <a name="Grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant"></a>

```csharp
public object Grant { get; set; }
```

- *Type:* object

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grant S3BucketAcl#grant}

---

### S3BucketAclAccessControlPolicyGrant <a name="S3BucketAclAccessControlPolicyGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyGrant {
    string Permission,
    S3BucketAclAccessControlPolicyGrantGrantee Grantee = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | grantee block. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}.

---

##### `Grantee`<sup>Optional</sup> <a name="Grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee"></a>

```csharp
public S3BucketAclAccessControlPolicyGrantGrantee Grantee { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grantee S3BucketAcl#grantee}

---

### S3BucketAclAccessControlPolicyGrantGrantee <a name="S3BucketAclAccessControlPolicyGrantGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyGrantGrantee {
    string Type,
    string EmailAddress = null,
    string Id = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}.

---

### S3BucketAclAccessControlPolicyOwner <a name="S3BucketAclAccessControlPolicyOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyOwner {
    string Id,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}.

---

### S3BucketAclConfig <a name="S3BucketAclConfig" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    S3BucketAclAccessControlPolicy AccessControlPolicy = null,
    string Acl = null,
    string ExpectedBucketOwner = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy">AccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | access_control_policy block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}.

---

##### `AccessControlPolicy`<sup>Optional</sup> <a name="AccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy"></a>

```csharp
public S3BucketAclAccessControlPolicy AccessControlPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#access_control_policy S3BucketAcl#access_control_policy}

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketAclAccessControlPolicyGrantGranteeOutputReference <a name="S3BucketAclAccessControlPolicyGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyGrantGranteeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue"></a>

```csharp
public S3BucketAclAccessControlPolicyGrantGrantee InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---


### S3BucketAclAccessControlPolicyGrantList <a name="S3BucketAclAccessControlPolicyGrantList" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyGrantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get"></a>

```csharp
private S3BucketAclAccessControlPolicyGrantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketAclAccessControlPolicyGrantOutputReference <a name="S3BucketAclAccessControlPolicyGrantOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyGrantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee">PutGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee">ResetGrantee</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrantee` <a name="PutGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee"></a>

```csharp
private void PutGrantee(S3BucketAclAccessControlPolicyGrantGrantee Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---

##### `ResetGrantee` <a name="ResetGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee"></a>

```csharp
private void ResetGrantee()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput">GranteeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee"></a>

```csharp
public S3BucketAclAccessControlPolicyGrantGranteeOutputReference Grantee { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a>

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput"></a>

```csharp
public S3BucketAclAccessControlPolicyGrantGrantee GranteeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketAclAccessControlPolicyOutputReference <a name="S3BucketAclAccessControlPolicyOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant">PutGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner">PutOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant">ResetGrant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrant` <a name="PutGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant"></a>

```csharp
private void PutGrant(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant.parameter.value"></a>

- *Type:* object

---

##### `PutOwner` <a name="PutOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner"></a>

```csharp
private void PutOwner(S3BucketAclAccessControlPolicyOwner Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---

##### `ResetGrant` <a name="ResetGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant"></a>

```csharp
private void ResetGrant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant">Grant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner">Owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput">GrantInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput">OwnerInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant"></a>

```csharp
public S3BucketAclAccessControlPolicyGrantList Grant { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner"></a>

```csharp
public S3BucketAclAccessControlPolicyOwnerOutputReference Owner { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a>

---

##### `GrantInput`<sup>Optional</sup> <a name="GrantInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput"></a>

```csharp
public object GrantInput { get; }
```

- *Type:* object

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput"></a>

```csharp
public S3BucketAclAccessControlPolicyOwner OwnerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue"></a>

```csharp
public S3BucketAclAccessControlPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---


### S3BucketAclAccessControlPolicyOwnerOutputReference <a name="S3BucketAclAccessControlPolicyOwnerOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketAclAccessControlPolicyOwnerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue"></a>

```csharp
public S3BucketAclAccessControlPolicyOwner InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---



